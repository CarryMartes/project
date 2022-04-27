
from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import LogoutAPIView, RegisterApi, UserProfile, getUsersList, Home
from allauth.account.views import LogoutView

urlpatterns = [
    path('login/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('registration/', RegisterApi.as_view(), name='registration'),
    path('userProfile/', UserProfile.as_view(), name='profile'),
    path('users/', getUsersList, name="users"),
    path('another', Home.as_view(), name='home'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('github_logout/', LogoutView.as_view(), name="github_account")
]