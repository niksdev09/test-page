# подсчетами
def sort(arr):
    min_value = min(arr)
    max_value = max(arr)
    range_values = max_value - min_value + 1

    count_array = [0] * range_values

    for i in arr:
        count_array[i - min_value] += 1


    for i in range(1, range_values):
        count_array[i] += count_array[i-1]
        # print(count_array)

    sorted_arr = [0] * len(arr)
    for i in range(len(arr)-1, -1, -1):
        sorted_arr[count_array[arr[i]-min_value]-1] = arr[i]
        count_array[arr[i]-min_value] -= 1
        print(sorted_arr, count_array)

    return sorted_arr

data = [5, 2, 4, 6, 1, 3, 99]
sorted_data = sort(data)
print(sorted_data)
