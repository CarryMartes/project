from django.http import JsonResponse
from rest_framework import generics, permissions, mixins
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated  #new here
import requests
from .models import Students, Teachers
from .serializers import RegisterSerializer, UserSerializer

def register(request):
    serializer = UserSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    return Response({
        "message": 'User created'
    })

class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        if 'status' in request.data: 
            if request.data['status'] == 'student':
                student = Students()
                student.user = user
                student.nickname = user.username
                student.stud_id = '19'
                student.save()
            else:
                teacher = Teachers()
                teacher.user = user
                teacher.nickname = user.username
                teacher.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login",
        })

# token: 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
def getUsersList(request):
    username = request.GET['username']
    response = requests.get("https://api.github.com/users/" + username, auth=('CarryMartes','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'))
    return JsonResponse(response.json())