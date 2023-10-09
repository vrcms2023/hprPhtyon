from django.shortcuts import get_object_or_404
from .models import ContactUS
from .serializers import ContactUSSerializer
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404
from django.core.mail import send_mail
from django.conf import settings


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
            email_msg = send_mail(
                'Thank you contact VRCMS ' + serializer.data["firstName"],
                serializer.data["description"] + serializer.data["phoneNumber"],
                settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER, serializer.data["email"], "designerkrishna@gmail.com"]
            )
            email_msg.send()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
