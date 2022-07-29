from django.db import models

class Testimonial(models.Model):
  name = models.CharField(max_length=50, null=True)
  title = models.CharField(max_length=100, null=True, blank=True)
  quote = models.CharField(max_length=1000, null=True)
  image = models.ImageField(upload_to="testimonial_thumbnail", blank=True)
  
  def __str__(self):
    return self.name
  
class Job(models.Model):
  name = models.CharField(max_length=200, null=True)
  image = models.ImageField(upload_to="companies", null=True)
  
  def __str__(self):
    return self.name
  
