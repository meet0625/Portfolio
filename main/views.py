
from django.shortcuts import render
from .models import *
def home(r): return render(r,'main/home.html')
def about(r): return render(r,'main/about.html')
def skills(r): return render(r,'main/skills.html')
def education(r): return render(r,'main/education.html')
def work(r): return render(r,'main/work.html')
def contact(r): return render(r,'main/contact.html')


def work(request):
    projects = Project.objects.order_by("-created_at")
    return render(request, "main/work.html", {"projects": projects})


def contact(request):
    success = False

    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        if name and email and message:
            ContactMessage.objects.create(
                name=name,
                email=email,
                message=message
            )
            success = True

    return render(request, "main/contact.html", {"success": success})
