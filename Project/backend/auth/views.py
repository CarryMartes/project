from django.http import JsonResponse
from rest_framework import generics, permissions, mixins
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated  #new here
import requests
from .models import UserProfile
from .serializers import RegisterSerializer, UserSerializer

def register(request):
    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    return Response({
        "message": 'User created'
    })

class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny, )
    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        userProfile = UserProfile()
        userProfile.user = user
        userProfile.nickname = user.username
        userProfile.save()
        return Response({
            "user": UserSerializer(user,    context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login",
        })

def getUsersList(request):
    username = request.GET['username']
    response = requests.get("https://api.github.com/users/" + username)
    return JsonResponse(response.json())