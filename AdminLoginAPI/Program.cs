using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        builder => builder
            .WithOrigins("http://localhost:3000") // your React app's origin
            .AllowAnyHeader()
            .AllowAnyMethod());
});


builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowFrontend");

app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.Run();

