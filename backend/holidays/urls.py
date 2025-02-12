from django.urls import path
from .views import CountriesAPIView, HolidaysAPIView



urlpatterns = [
    path("countries/", CountriesAPIView.as_view(), name="countries-api"),
    path("holidays/", HolidaysAPIView.as_view(), name="holidays-api")
]
