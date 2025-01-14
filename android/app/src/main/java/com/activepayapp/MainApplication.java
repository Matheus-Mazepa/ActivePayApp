import com.activepayapp.GetStorePackage;

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new GetStorePackage()
    );
}