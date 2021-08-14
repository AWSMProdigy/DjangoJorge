from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('Listings', index),
    path('About', index),
    path('Contact', index)
]