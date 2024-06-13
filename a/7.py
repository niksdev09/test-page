# блочная

def insertion_sort(bucket):
    for i in range(1, len(bucket)):
        key = bucket[i]
        j = i - 1
        while j >= 0 and bucket[j] > key:
            bucket[j + 1] = bucket[j]
            j -= 1
        bucket[j + 1] = key

def bucket_sort(arr):
    max_val = max(arr)
    min_val = min(arr)
    num_nuckets = 10
    size = max_val/len(arr)

    buckets = [[] for _ in range(num_nuckets)]

    for num in arr:
        index = int(num//size)
        # print(index)
        buckets[index].append(num)
    for i in range(len(buckets)):
        insertion_sort(buckets[i])
    index = 0
    for bucket in buckets:
        for num in bucket:
            arr[index] = num
            index += 1

arr = [1,7,2,99,34,2,55,23]
bucket_sort(arr)
print(arr)
