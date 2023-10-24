from django.db import models
from django.contrib.auth.models import User
from posts.models import Post


class Save(models.Model):
    """
    Save model
    Owner is the user instance and post is the post instance.
    unique_together is to bind owner and post together
    """

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, related_name='saves', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'post']

    def __str__(self):
        return f'{self.owner} {self.post}'
