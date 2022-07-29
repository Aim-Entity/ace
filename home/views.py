from django.shortcuts import render
from .models import Testimonial, Job

def index(request):
    testimonials = Testimonial.objects.all()
    jobs = Job.objects.all()


    context = {
        "testimonials": testimonials,
        "jobs": jobs
    }
    return render(request, "index/index.html", context)