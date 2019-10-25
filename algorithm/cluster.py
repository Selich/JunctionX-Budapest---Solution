from sklearn.cluster import KMeans
import sklearn.preprocessing
import pandas as pd
import argparse
import numpy as np


def gain_data() -> pd.DataFrame:
    pass
    



def main():
    df = df[~df.isin([np.nan, np.inf, -np.inf]).any(1)]
# Convert DataFrame to matrix if all are float or convertable to float
    mat = df.values
    X = mat[:,0::3]
    Y = mat[:,1::3]
    Z = mat[:,2::3]
    mat = np.concatenate((X,Y,Z),axis=0)
    mat1 = sklearn.preprocessing.normalize(mat,axis=0, norm='max')
# Using sklearn
    km = KMeans(n_clusters=2,n_init=10)
    predicted = km.fit_predict(mat1)
    print(predicted.min(),predicted.max(),predicted.mean())
    df = pd.DataFrame.from_records(mat)
    df["target_class"] = predicted
    df.to_csv(args.output_path)
    pd.DataFrame.from_records(mat1).to_csv("../data/normalized.csv")
    print("End!")
if __name__ == "__main__":
    main()
