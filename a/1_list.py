class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class NewList:
    def __init__(self, data=None):
        self.head = Node(data) if data else data

    def __str__(self):
        if self.head:
            current = self.head
            result = []
            while current:
                result.append(current.data)
                current = current.next

            return str(result)
        else:
            return 'List empty []'
    def append(self, value):
        if self.head:
            current = self.head
            while current.next:
                current = current.next
            current.next = Node(value)
        else:
            self.head = Node(value)

    def remove(self, index):
        if index < 0:
            return
        if index == 0:
            self.head = self.head.next
            return
        prev = None
        i = 0
        current = self.head
        while current and i < index:
            prev = current
            current = current.next
            i+=1
        if current:
            prev.next = current.next

    def reverse(self):
        prev = None
        current = self.head

        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev

    def has_cicle(self):
        slow = self.head
        fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False

    def get_item(self, k):
        if k <= 0:
            return None
        slow = fast = self.head
        for _ in range(k):
            if fast is None:
                return None
            fast = fast.next
        while fast:
            slow = slow.next
            fast = fast.next
        return slow.data if slow else None

        # prev = None
        # i = 0
        # current = self.head
        # while current and i < k:
        #     prev = current
        #     current = current.next
        #     i += 1
        # if current:
        #     prev.next = current.next

a = NewList(1)
a.append(2)
a.append(3)


# a.remove(1)
# a.reverse()
# a.head.next.next.next.next = a.head.next
# a.get_item(4)
print(a.get_item(2))
