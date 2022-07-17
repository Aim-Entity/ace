from django.shortcuts import render
from .models import Project


def project(request):
    projects = Project.objects.all()

    context = {
        "projects": projects
    }
    return render(request, "project/project.html", context)