class Node:
    def __init__(self, data):
        self.prev = None
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
            current.next.prev = current
        else:
            self.head = Node(value)

    def insert(self, i, value):
        new = Node(value)
        if i == 0:
            new.next = self.head
            if self.head:
                self.head.prev = new
            self.head = new
        else:
            current = self.head
            for _ in range(i-1):
                if current is None:
                    return
                current = current.next
            if current is None:
                return
            new.next = current.next
            new.prev = current
            if current.next:
                current.next.prev = new
            current.next = new

    def remove_first(self, data):
        current =self.head
        while current:
            if current.data == data:
                if current.prev:
                    current.prev.next = current.next
                if current.next:
                    current.next.prev = current.next
                if current == self.head:
                    self.head = current.next
                return
            current = current.next

    def reverse(self):
        prev = None
        current = self.head

        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev

a = NewList()
a.append(1)
a.append(2)
a.append(3)
a.insert(7, 123)
