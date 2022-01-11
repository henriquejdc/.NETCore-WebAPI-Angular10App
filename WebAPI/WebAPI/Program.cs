var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// swagger para acessar via web a api
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{

    // swagger para acessar via web a api
    app.UseSwagger();
    app.UseSwaggerUI();
}


// permissão para acessar de todo lugar com metodos e cabeçarios
app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

// mapeamento dos controllers
app.MapControllers();

app.Run();
