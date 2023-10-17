from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    """ Post Model """
    
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField(max_length=255)
    image = models.ImageField(
        upload_to='images/', blank=True
    )
    tag = models.CharField(max_length=25, blank=True)

    
    class Meta:
        ordering = ['-created_at']
        
    def __str__(self):
        return f"{self.id} {self.owner}"

