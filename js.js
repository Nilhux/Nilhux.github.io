function transferir({bancoCliente,cuentaCliente,saldoCliente,bancoDestino,cuentaDestino,horaDeTransferencia,monto}){
    const costoTransaccion = 50;
    if ((cuentaCliente && cuentaDestino) && (saldoCliente > monto + costoTransaccion) && (bancoCliente == bancoDestino)&& ((horaDeTransferencia > 8 && horaDeTransferencia < 13)||(horaDeTransferencia > 15 && horaDeTransferencia < 20))){

    }

}