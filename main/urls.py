
from django.urls import path
from . import views
urlpatterns = [
 path('', views.home),
 path('about/', views.about),
 path('skills/', views.skills),
 path('education/', views.education),
 path('work/', views.work),
 path('contact/', views.contact),
]
