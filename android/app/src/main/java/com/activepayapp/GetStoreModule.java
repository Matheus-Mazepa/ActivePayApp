package com.activepayapp;

import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class GetStoreModule extends ReactContextBaseJavaModule {

    private static final String TAG = "GetStoreModule";

    public GetStoreModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "GetStoreModule";
    }

    @ReactMethod
    public void initializeSDK(Promise promise) {
        try {
            // Inicializar o SDK
            Log.d(TAG, "Inicializando o SDK da GetStore...");
            promise.resolve("SDK inicializado com sucesso!");
        } catch (Exception e) {
            promise.reject("Erro ao inicializar o SDK", e);
        }
    }

    @ReactMethod
    public void processPayment(String amount, Promise promise) {
        try {
            // Chame o método do SDK para processar o pagamento
            Log.d(TAG, "Processando pagamento...");
            // Substitua pelo método do SDK
            boolean paymentSuccess = true; // Simulação
            if (paymentSuccess) {
                promise.resolve("Pagamento realizado com sucesso!");
            } else {
                promise.reject("Falha no pagamento");
            }
        } catch (Exception e) {
            promise.reject("Erro ao processar pagamento", e);
        }
    }
}