import pandas as pd

data = pd.read_csv('./runs/detect/train/results.csv')

best_epoch = data['metrics/mAP50(B)'].idxmax()
best_model_info = data.iloc[best_epoch]  

print("Melhor modelo encontrado na época:", best_model_info['epoch'])
print("metrics/mAP50(B) do melhor modelo:", best_model_info['metrics/mAP50(B)'])