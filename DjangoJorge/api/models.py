from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class Lead(models.Model):
    Name = models.CharField(max_length=50)
    Email = models.EmailField(max_length=100, unique=True)
    Message = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

class Listing(models.Model):
    Address = models.CharField(max_length=200, unique=True)
    City = models.CharField(max_length=200)
    Price = models.CharField(max_length=50)
    State = models.CharField(max_length=50)
    Bed = models.CharField(max_length=2)
    Bath = models.CharField(max_length=2)
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=2000)
    sqft = models.CharField(max_length=8)
    year = models.CharField(max_length=4)
    status = models.CharField(max_length=50)


    