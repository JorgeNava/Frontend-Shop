# -*- coding: utf-8 -*-
"""
Created on Thu Jan 13 16:53:06 2022

@author: Jorge Nava
"""
import datetime

# CONSTANTS
"""
Gdl - MX $800
Mx - gdl $800
Gdl - Mty $1050
Mty - Gdl $1050
Mty-  MX $1170
MX - MTY $1170
"""
TODAY = datetime.datetime.now()

TRIPS = [
  {
   "origin": "GDL",
   "destiny": "MX",
   "cost": 800
   },
      {
   "origin": "MX",
   "destiny": "GDL",
   "cost": 800
   },
    {
   "origin": "GDL",
   "destiny": "MTY",
   "cost": 1050
   },
        {
   "origin": "MTY",
   "destiny": "GDL",
   "cost": 1050
   },
          {
   "origin": "MTY",
   "destiny": "MX",
   "cost": 1170
   },
            {
   "origin": "MX",
   "destiny": "MTY",
   "cost": 1170
   }
]

AGE_OLD = 65
AGE_YOUNG = 25

PROMO_ANTICIPATION_WEEK = 0.05
PROMO_ANTICIPATION_MONTH = 0.15
PROMO_OLD = 0.20
PROMO_YOUNG = 0.10

print("""=== TRIPS ===
GDL - MX $800
GDL - MTY $1050
MTY - GDL $1050
MTY-  MX $1170
MX - GDL $800
MX - MTY $1170""")

DESTINY = input("Where are you going? ")
ORIGIN = input("From where you are traveling? ")
date_entry = input('When do you want to travel? (Enter a date in YYYY-MM-DD format) ')
year, month, day = map(int, date_entry.split('-'))
TRAVEL_DATE = datetime.datetime(year, month, day)
AGE = int(input("Whats your age? "))

delta_days = TRAVEL_DATE - TODAY
delta_days = delta_days.days

ticket_cost = 0
discount = 0

for trip in TRIPS:
  if trip["origin"] == ORIGIN.upper() and trip["destiny"] == DESTINY.upper():
    ticket_cost = trip["cost"]
    if AGE > AGE_OLD:
      discount += PROMO_OLD      
    elif AGE < AGE_YOUNG:
      discount += PROMO_YOUNG
    if delta_days > 30:
      discount += PROMO_ANTICIPATION_MONTH
    elif delta_days > 7:
      discount += PROMO_ANTICIPATION_WEEK

FINAL_COST = ticket_cost * (1 - discount)
print()
print("The total cost will be: $" + str(FINAL_COST))
print("With a cost of " + str(ticket_cost) + " for the ticket and")
print("a " + str(discount*100) + "% total discount.")
