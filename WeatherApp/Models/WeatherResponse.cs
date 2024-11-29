public class WeatherResponse
{
    public Location Location { get; set; }
    public Current Current { get; set; }
}

public class Location
{
    public string Name { get; set; }
    public string Country { get; set; }
}

public class Current
{
    public float temp_c { get; set; }
    public float feelslike_c { get; set; }
    public double wind_kph { get; set; }
    public int humidity { get; set; }
    public float? cloud {  get; set; }
    public float windchill_c { get; set; }
    public float? uv {  get; set; }

}
