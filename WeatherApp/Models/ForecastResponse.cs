public class ForecastResponse
{
    public Location Location { get; set; }
    public Forecast Forecast { get; set; }
}

public class Forecast
{
    public ForecastDay[] Forecastday { get; set; } // Match the API response key
}

public class ForecastDay
{
    public string Date { get; set; }
    public Day Day { get; set; }
}

public class Day
{
    public float Maxtemp_c { get; set; }
    public float Mintemp_c { get; set; }
    public float Avgtemp_c { get; set; }
    public double Maxwind_kph { get; set; }
    public double Totalprecip_mm { get; set; }
    public int Avghumidity { get; set; }
    public int Daily_will_it_rain { get; set; }
    public int Daily_chance_of_rain { get; set; }
}



