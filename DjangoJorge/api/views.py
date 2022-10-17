from django.shortcuts import render
from rest_framework import generics, status
from .serializers import CreateListingSerializer, LeadSerializer, CreateLeadSerializer, ListingSerializer
from .models import Lead, Listing
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse


# Create your views here.
class LeadView(generics.ListAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class CreateLeadView(APIView):
    serializer_class = CreateLeadSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('Name')
            email = serializer.data.get('Email')
            message = serializer.data.get('Message')
            subject = "New Lead"
            body = {
                'name': name,
                'email': email,
                'message': message,
            }
            messageToSend = "\n".join(body.values())
            try:
                send_mail(subject, messageToSend, 'admin@example.com', ['admin@example.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found')
            lead = Lead(Name=name, Email=email, Message=message)
            lead.save()
            return Response(LeadSerializer(lead).data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class ListingView(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

class CreateListingView(APIView):
    serializer_class = CreateListingSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            address = serializer.data.get('Address')
            city = serializer.data.get('City')
            price = serializer.data.get('Price')
            state = serializer.data.get('State')
            bed = serializer.data.get('Bed')
            bath = serializer.data.get('Bath')
            listing = Listing(Address=address, City=city, Price=price, State=state, Bed=bed, Bath=bath)
            listing.save()
            return Response(ListingSerializer(listing).data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)




