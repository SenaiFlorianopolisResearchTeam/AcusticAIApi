import tensorflow as tf

def parse_example(example_proto):
    feature_description = {
        'image': tf.io.FixedLenFeature([], tf.string),
        'label': tf.io.FixedLenFeature([], tf.int64),
    }

    example = tf.io.parse_single_example(example_proto, feature_description)
    

    image = tf.io.decode_image(example['image'], channels=3)

    return image, example['label']

train_dataset = tf.data.TFRecordDataset('./TrafficAI-4/train/car-truck-bike.tfrecord').map(parse_example)
test_dataset = tf.data.TFRecordDataset('./TrafficAI-4/test/car-truck-bike.tfrecord').map(parse_example)
validation_dataset = tf.data.TFRecordDataset('./TrafficAI-4/valid/car-truck-bike.tfrecord').map(parse_example)

batch_size = 16
num_classes = 4
num_epochs = 1000
width = 1240
height = 920
channels = 1

train_dataset = train_dataset.shuffle(buffer_size=50000)
train_dataset = train_dataset.repeat()
train_dataset = train_dataset.batch(batch_size)
train_dataset = train_dataset.prefetch(1)

test_dataset = test_dataset.batch(batch_size)
validation_dataset = validation_dataset.batch(batch_size)

model = tf.keras.Sequential()
model.add(tf.keras.layers.Conv2D(filters=32, kernel_size=(3, 3), activation='relu', input_shape=(width, height, channels)))
model.add(tf.keras.layers.MaxPooling2D(pool_size=(2, 2)))
model.add(tf.keras.layers.Flatten())
model.add(tf.keras.layers.Dense(units=64, activation='relu'))
model.add(tf.keras.layers.Dense(units=num_classes, activation='softmax'))

model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

model.fit(train_dataset, epochs=num_epochs, validation_data=validation_dataset)

loss, accuracy = model.evaluate(test_dataset)