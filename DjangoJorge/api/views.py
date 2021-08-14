from django.shortcuts import render
from rest_framework import generics, serializers
from .serializers import LeadSerializer
from .models import Lead

# Create your views here.
class LeadView(generics.ListAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer