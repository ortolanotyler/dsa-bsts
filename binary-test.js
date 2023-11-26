const SearchTree = require("./binary-search-tree");

describe("BinarySearchTree Operations", function() {
  let bst;

  beforeEach(() => {
    bst = new SearchTree();
  });

  describe("Method: insert", function() {
    test("should correctly insert nodes", function() {
      bst.insert(15).insert(20).insert(10).insert(12);
      expect(bst.root.value).toEqual(15);
      expect(bst.root.right.value).toEqual(20);
      expect(bst.root.left.right.value).toEqual(12);
    });

    test("should insert at root when tree is empty", function() {
      bst.insert(15);
      expect(bst.root.value).toEqual(15);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
    });
  });

  describe("Method: insertRecursively", function() {
    test("should insert nodes recursively at the correct position", function() {
      bst.insertRecursively(15).insertRecursively(20).insertRecursively(10).insertRecursively(12);
      expect(bst.root.value).toEqual(15);
      expect(bst.root.right.value).toEqual(20);
      expect(bst.root.left.right.value).toEqual(12);
    });

    test("should insert at root recursively when tree is empty", function() {
      bst.insertRecursively(15);
      expect(bst.root.value).toEqual(15);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
    });
  });

  describe("Method: find", function() {
    beforeEach(() => {
      bst.insert(15).insert(20).insert(10).insert(12);
    });

    test("should correctly find a node", function() {
      const found = bst.find(20);
      expect(found.value).toBe(20);
      expect(found.left).toBeNull();
      expect(found.right).toBeNull();
    });

    test("should return undefined if node not found", function() {
      const notFound = bst.find(100);
      expect(notFound).toBeUndefined();
    });
  });

  describe("Method: findRecursively", function() {
    beforeEach(() => {
      bst.insert(15).insert(20).insert(10).insert(12);
    });

    test("should correctly find a node recursively", function() {
      const found = bst.findRecursively(20);
      expect(found.value).toBe(20);
      expect(found.left).toBeNull();
      expect(found.right).toBeNull();
    });

    test("should return undefined if node not found recursively", function() {
      const notFound = bst.findRecursively(100);
      expect(notFound).toBeUndefined();
    });
  });

  describe("Depth First Searches", function() {
    beforeEach(() => {
      bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
    });

    test("pre-order traversal", function() {
      expect(bst.dfsPreOrder()).toEqual([15, 10, 1, 5, 12, 20, 50]);
    });

    test("in-order traversal", function() {
      expect(bst.dfsInOrder()).toEqual([1, 5, 10, 12, 15, 20, 50]);
    });

    test("post-order traversal", function() {
      expect(bst.dfsPostOrder()).toEqual([5, 1, 12, 10, 50, 20, 15]);
    });
  });

  describe("Breadth First Search", function() {
    beforeEach(() => {
      bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
    });

    test("should return correct BFS order", function() {
      expect(bst.bfs()).toEqual([15, 10, 20, 1, 12, 50, 5]);
    });
  });

  // Additional tests for methods like 'remove', 'isBalanced', 'findSecondHighest', 'dfsInOrderIterative' can be similarly structured.
});
