from django.urls import path
from .views import *


urlpatterns = [
    path('createBannerIntro/', BannerAndIntroAPIView.as_view(), name="create_get_Banner_Intro"),
    path('updateBannerIntro/<pk>/', BannerAndIntroUpdateAndDeleteView.as_view(), name='retrieve_update_delete_Banner_Intro'),
    path('clientBannerIntro/', ClientBannerAndIntroView.as_view(), name="get_client_Banner_Intro"),
]
