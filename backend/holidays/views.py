from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .utils import get_countries, get_holidays

# Create your views here.


class CountriesAPIView(APIView):
    def get(self, request):
        data = get_countries()
        return Response(data)

class HolidaysAPIView(APIView):
    def get(self, request):
        country = request.GET.get("country")
        year = request.GET.get("year")
        search = request.GET.get("search")

        if not country or not year:
            return Response({"error": "Missing country or year"}, status=400)

        try:
            year = int(year)  # Convert to integer
        except ValueError:
            return Response({"error": "Year must be an integer"}, status=400)

        data = get_holidays(country, year)

        if search:
            print(data.keys())
            holidays = data["response"]["holidays"]
            holidays = [item for item in holidays if search.lower() in item["name"].lower()]
            data["response"]["holidays"] = holidays

        return Response(data)
