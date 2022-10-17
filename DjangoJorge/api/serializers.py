from rest_framework import serializers
from .models import Lead, Listing

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('id', 'Name', 'Email', 'Message', 'created_at')

class CreateLeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('Name', 'Email', 'Message')

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('id', 'Address', 'City', 'Price', 'State', 'Bed', 'Bath', 'created_at')

class CreateListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('Address', 'City', 'Price', 'State', 'Bed', 'Bath')