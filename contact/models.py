from django.db import models
from django.core.validators import RegexValidator


class Contact(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.IntegerField()
    message = models.CharField(max_length=1200)

    has_read = models.BooleanField(default=False)

    def __str__(self):
        return f"From {self.name}. Has It Been Read: {self.has_read}"