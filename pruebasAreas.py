import unittest
from CalcularAreas import *

class TestStringMethods(unittest.TestCase):
    def test_border_limits(self):
        self.assertEqual(calculateArea(-1,1,"T"), -1)

    def test_inexistant_menu_option(self):
        self.assertEqual(calculateArea(5,4,"Z"), -1)

    def test_triangle_area_calcuation(self):
        self.assertEqual(calculateArea(5,4,"T"), 10)
  
if __name__ == '__main__':
    unittest.main()