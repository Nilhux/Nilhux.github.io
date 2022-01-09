from bokeh.plotting import figure, output_file, show

if __name__ == "__main__":
    output_file("graficado_simple.html")
    fig = figure(title="titulo generico")
    
    x = int(input("Cuantos numeros quieres proyectar?: "))
    x = list(range(x + 1))
    y = []
    count = 1
    for i in x:
        y.append(count)
        count = count * 2

    fig.line(x,y,legend_label="numeros", line_width=2, color="red")
    show(fig)