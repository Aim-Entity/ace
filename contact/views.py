from django.shortcuts import render, redirect
from .forms import ContactForm
from .models import Contact
from django.core.mail import EmailMessage
from django.conf import settings
import urllib
import json
from django.contrib import messages

def contact(request):
    form = ContactForm

    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            recaptcha_response = request.POST.get('g-recaptcha-response')
            url = 'https://www.google.com/recaptcha/api/siteverify'
            
            values = {
                'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
                'response': recaptcha_response
                }
            data = urllib.parse.urlencode(values).encode()
            req =  urllib.request.Request(url, data=data)
            response = urllib.request.urlopen(req)
            result = json.loads(response.read().decode())
            
            if result['success']:
                form.save()
                name = form.cleaned_data.get("name")
                email_address = form.cleaned_data.get('email')
                phone = form.cleaned_data.get("phone")
                msg = form.cleaned_data.get('message')
                body = f'Name: {name}\nEmail: {email_address}\nPhone: {phone}\n\nMessage: {msg}'

                email = EmailMessage(
                    'Ace Designs - Contact Us',
                    body,
                    settings.EMAIL_HOST_USER,
                    ['info@acewebdesigns.co.uk'],
                )
                

                email.fail_silently = False
                email.send()
            else:
                messages.error(request, 'Invalid reCAPTCHA. Please try again.')
            return redirect("index")

    context = {
        "form": form
    }
    return render(request, "contact/contact.html", context)
