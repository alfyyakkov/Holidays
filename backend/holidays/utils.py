import requests
from django.conf import settings
from django.core.cache import cache

BASE_URL = "https://calendarific.com/api/v2/" # /countries /holidays


def get_countries():
    cache_key = "countries"
    cached_data = cache.get(cache_key)

    if cached_data:
        print("Returning cached data")
        return cached_data
    
    print("Fetching data from API")
    url = f"{BASE_URL}countries?api_key={settings.CALENDARIFIC_API_KEY}"
    print(url)
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        cache.set(cache_key, data, timeout= 86400)  # Cache for 1 day (86400 seconds)
        return data
    else:
        return {'error': "Failed to fetch data"}
    

def get_holidays(country, year):
    cache_key = f"holidays_{country}_{year}"  # Unique cache key
    cached_data = cache.get(cache_key)

    if cached_data:
        print("Returning cached data")
        return cached_data  # Return cached response if available

    print("Fetching data from API")
    url = f"{BASE_URL}holidays?api_key={settings.CALENDARIFIC_API_KEY}&country={country}&year={year}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        cache.set(cache_key, data, timeout=86400)  # Cache for 1 day (86400 seconds)
        return data
    else:
        return {"error": "Failed to fetch data"}
    