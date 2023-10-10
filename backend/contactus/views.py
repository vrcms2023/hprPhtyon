from django.shortcuts import get_object_or_404
from .models import ContactUS
from .serializers import ContactUSSerializer
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404
from django.core import mail
from django.conf import settings
from django.template import Context
from django.template.loader import TemplateDoesNotExist, render_to_string, get_template
from django.utils.html import strip_tags


# Create your views here.
    
class ContactUSAPIView(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = ContactUS.objects.all()
    serializer_class = ContactUSSerializer

    """
    List all contact us, or create a new contactus.
    """

    def get(self, request, format=None):
        snippets = ContactUS.objects.all()
        serializer = ContactUSSerializer(snippets, many=True)
        return Response({"contactus": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        serializer = ContactUSSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            connection = mail.get_connection(
                host=settings.EMAIL_HOST, 
                port=settings.EMAIL_PORT,  
                username=settings.EMAIL_HOST_USER, 
                password=settings.EMAIL_HOST_PASSWORD, 
                use_tls=settings.EMAIL_USE_TLS
            )
            firstName = serializer.data.get("firstName")
            description = serializer.data.get("description")
            phoneNumber  = serializer.data.get("phoneNumber")
            email  = serializer.data.get("email")

            adminSubject = f'User - {firstName}'
            #admin_message = render_to_string('templates/admin_mesg.html', {'description': description, 'phoneNumber':phoneNumber })
            message = get_template("templates/admin_mesg.html").render(Context({'description': description, 'phoneNumber':phoneNumber }))
            
            #adminMessage = f'<h4>Message : </h4><p> {description} </p><h4>Phone number :</h4><p> {phoneNumber} </p>'
            admin_from_email = email
            adimin_recipient_list = ['contact@hprinfra.com']

            admin_Email = mail.EmailMessage(subject=adminSubject, body=message, from_email=admin_from_email, to=adimin_recipient_list, reply_to=admin_from_email)
            admin_Email.content_subtype = "html"
            admin_Email.send()

            # client_subject = 'Subject : Your Inquiry about Our Product',
            # client_message = render_to_string('templates/customer_mesg.html', {'description': description, 'phoneNumber':phoneNumber })
            # client_plain_message = strip_tags(client_message)
            # #client_message = f'<h1>Hi {firstName} </h1>  <p>Thanks for contacting HPRInfra!<p> <p>This automatic reply is just to let you know that we received your message and we will get back to you with a response as quickly as possible. During business_hours, we do our best to reply as quick as we can, usually within a couple of hours.</p>'
            # client_from_email = 'contact@hprinfra.com'
            # client_recipient_list = [email,]

            # client_Email = mail.send_mail(client_subject, client_plain_message, client_from_email, client_recipient_list)

            # with mail.get_connection() as connection:
            #     connection.send_messages([client_Email])
            
                # subject = 'Thank you contact VRCMS' 
                # email_from = settings.EMAIL_HOST_USER  
                # recipient_list = [request.POST.get("email"), ]  
                # message = request.POST.get("description")  
                # EmailMessage(subject, message, email_from, recipient_list, connection=connection).send()  
 

            # email_msg = send_mail(
            #     'Thank you contact VRCMS ' + serializer.data["firstName"],
            #     serializer.data["description"] + serializer.data["phoneNumber"],
            #     settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER, serializer.data["email"], "designerkrishna@gmail.com"]
            # )
            # email_msg.send()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
