from django.db import models

# Create your models here.
class Lead(models.Model):
    Name = models.CharField(max_length=50)
    Email = models.EmailField(max_length=100, unique=True)
    Message = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    