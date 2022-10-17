from django.urls import path
from .views import LeadView, CreateLeadView, ListingView, CreateListingView

urlpatterns = [
    path('lead', LeadView.as_view()),
    path('create-lead', CreateLeadView.as_view()),
    path('listing', ListingView.as_view()),
    path('create-listing', CreateListingView.as_view()),
]
