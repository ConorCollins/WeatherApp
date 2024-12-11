using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

public class WeatherService
{
    private readonly HttpClient _httpClient;
    private const string ApiKey = "195aea3e03444e099c6164701241911";
    private const string BaseUrl = "https://api.weatherapi.com/v1";

    public WeatherService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    //Method for Current Weather
    public async Task<WeatherResponse> GetWeatherAsync(string city)
    {
        try
        {
            var url = $"{BaseUrl}/current.json?key={ApiKey}&q={city}&aqi=no";

            //send request and get response as WeatherResponse object
            var response = await _httpClient.GetFromJsonAsync<WeatherResponse>(url);
            return response;
        }
        catch (HttpRequestException ex)
        {
            //handles network errors or API errors
            Console.WriteLine($"Request error: {ex.Message}");
            return null;
        }
    }

    //Method for Forecast Weather
    public async Task<ForecastResponse> GetForecastAsync(string city)
    {
        try
        {
            var url = $"{BaseUrl}/forecast.json?key={ApiKey}&q={city}&days=3&aqi=no&alerts=no";

            var response = await _httpClient.GetFromJsonAsync<ForecastResponse>(url);
            return response;
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Request error: {ex.Message}");
            return null;
        }
    }
}