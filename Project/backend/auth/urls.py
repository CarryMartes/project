
from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import RegisterApi, getUsersList

urlpatterns = [
    path('login/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('registration/', RegisterApi.as_view(), name='registration'),
    path('users/', getUsersList, name="users"),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]