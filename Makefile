########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = 'Josue Gomez'
SID = '1001852411'
EMAIL = 'josue.gomez@mavs.uta.edu'
SEMESTER = SPRING2024
HE_PARTNERS = 'Karl_Dylan_Matignas_Baes Bishal_Giri Diwas_Sapkota Ismael_Tovar'
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
	@echo $(HE_PARTNERS)
submit:
	zip -r "submission_$(SEMESTER)_$(SID)_$(NAME).zip" .


cleanup:
	@rm -f .DS_Store
	@rm -f */.DS_Store

