Feature: Is the cup empty?

   Determine if a cup is empty

   Scenario: Determinate if a cup with something is empty
   Given A cup
   When It contains "something"
   Then The cup should be "not empty"
   