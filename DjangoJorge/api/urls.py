from django.urls import path
from .views import LeadView

urlpatterns = [
    path('lead', LeadView.as_view()),
    
]
