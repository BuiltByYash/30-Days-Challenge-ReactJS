from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import View

r = DefaultRouter()
r.register('crud', View, basename='crud')
r.register('orders', View, basename='orders')

urlpatterns = [
    path('', include(r.urls))
]
