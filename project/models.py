from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    link = models.URLField()

    software1 = models.FileField(upload_to="software", blank=True, null=True)
    software2 = models.FileField(upload_to="software", blank=True, null=True)
    software3 = models.FileField(upload_to="software", blank=True, null=True)

    s1_name = models.CharField(max_length=300, blank=True, null=True)
    s2_name = models.CharField(max_length=300, blank=True, null=True)
    s3_name = models.CharField(max_length=300, blank=True, null=True)

    image = models.ImageField(upload_to="project_image")

    def __str__(self):
        return self.name