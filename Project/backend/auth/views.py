from rest_framework import generics, permissions, mixins
from rest_framework.response import Response

from .models import UserProfile
from .serializers import RegisterSerializer, UserSerializer
from django.contrib.auth.models import User
#Register API
class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        userProfile = UserProfile()
        userProfile.user = user
        userProfile.nickname = user.username
        print(userProfile)
        userProfile.save()
        return Response({
            "user": UserSerializer(user,    context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login",
        })