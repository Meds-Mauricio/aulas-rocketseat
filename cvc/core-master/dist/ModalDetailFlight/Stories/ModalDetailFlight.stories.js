"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _core=require("@material-ui/core");var _react2=require("@storybook/react");var _BrandContext=require("../../BrandContext");var _ThemeProviderCustom=_interopRequireDefault(require("../../ThemeProviderCustom"));var _brandMock=_interopRequireDefault(require("../../utils/brandMock"));var _ModalDetailFlight=_interopRequireDefault(require("../ModalDetailFlight"));var mock={"package":{"flight":{"childFare":"0.0","fare":"1248.65","fee":"0.0","id":"1","segments":[{"correlationId":null,"destination":"MIA","flights":[{"arrivalAirport":"BSB","arrivalAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","arrivalDateTime":"2020-04-03T20:25:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"GRU","departureAirportDescription":"Guarulhos, S\xE3o Paulo","departureDateTime":"2020-04-03T18:50:00","fareBasis":null,"flightNumber":"1404","minutesDuration":95,"numberOfStops":0,"stops":[]},{"arrivalAirport":"MIA","arrivalAirportDescription":"Miami, Miami","arrivalDateTime":"2020-04-04T18:25:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"BSB","departureAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","departureDateTime":"2020-04-04T10:00:00","fareBasis":null,"flightNumber":"7748","minutesDuration":565,"numberOfStops":0,"stops":[]}],"issuerCia":"G3","issuerCiaName":"Gol","markup":null,"numberOfStops":1,"origin":"GRU","originProvider":null,"packageGroup":null,"segmentIndex":0,"sellKey":"PHJhdGVUb2tlbiBhZ3M9IlNVQiIgYnJpPSIxMDIwIiBjbWk9IkdPTCIgY2lkPSIzMCIgY3VyPSJCUkwiIGVjdD0iVVMiIGR0Zj0iMjAyMC0wNC0wNFQxODoyNTowMC4wMDBaIiBlc3Q9IkZMIiBlemk9IjEzNTI4IiBta3A9IjAuODkwMCIgb2ZkPSJ7ZzonR09MX3I6MTA6MjQnLGE6J1BSJyxiOicyU1BQMDAxNTM3JyxjOicyU1BQMDAxNTM3JyxkOicyU1BQMDAxNTM3JyxlOls1MDUyMV0sZjpbe2E6J0FEVCcsYjoyLGM6MTExMS4zMCxkOjQ4NC43NyxlOjAuMDAsaDowLjAwLGk6MC4wMCxqOjAuMDAsazowLjAwLG06MCxmOltdLGc6WzMwLDMwXX1dLGk6J2FkYTYzMjM3ZDQyMTRhZWUnfSIgcHhzPSIzMCwzMCIgcGtnPSJQQUNLQUdFIiBwbGM9IkJSTCIgZnRwPSJDIiBwb3Q9IjIyMjIuNjAiIHB3dD0iMzE5Mi4xNCIgcHJtPSJPUEVSMyIgcHJkPSJBSVIiIHJ0Yz0iT1BFUjMiIHNkdD0iMjAyMC0wMy0xMVQxNTo0Mzo0Ni42MzFaIiBzZ2s9InthOidHM34xNDA0fiB-fkdSVX4wNC8wMy8yMDIwIDE4OjUwfkJTQn4wNC8wMy8yMDIwIDIwOjI1fl5HM343NzQ4fiB-fkJTQn4wNC8wNC8yMDIwIDEwOjAwfk1JQX4wNC8wNC8yMDIwIDE4OjI1ficsYjonMH5Pfn5PTDRLWlRCUn5MMUJSfn4xMH5YJyxjOlt7YTonRzMxNDA0LTAzMDQyMDE4NTAnLGI6J0dSVUJTQjAzMDQyMDIwMjVPWScsZDonNzM4JyxlOidPTDRLWlRCUicsZjonTFQnLGg6J0czJ30se2E6J0czNzc0OC0wNDA0MjAxMDAwJyxiOidCU0JNSUEwNDA0MjAxODI1T1knLGQ6JzczOCcsZTonT0w0S1pUQlInLGY6J0xUJyxoOidHMyd9XSxlOicwLjAsMC4wJ30iIHNvdD0iMjQ5Ny4zMCIgc3d0PSIzNDY2Ljg0IiBzY3Q9IkJSIiBkdGk9IjIwMjAtMDQtMDNUMTg6NTA6MDAuMDAwWiIgc3N0PSJTUCIgc3ppPSI5MTQxIiBjb209IjAuMDAiIGNvcD0iMCIgaWN0PSIwLjAwIiBpY3A9IjAiIG1raT0iNTA1MjEiIHBsYT0iRzMiIHByZj0iMC4wMCIgbWVjPSJPV04iIGNwcD0iMCIgcnRrPSJMVCIgZW1pPSJmYWxzZSIgcHB4PSIzMCwxMTExLjMwLDEyNDguNjV8MzAsMTExMS4zMCwxMjQ4LjY1Ii8-","totalMinuteDuration":1415},{"correlationId":null,"destination":"CGH","flights":[{"arrivalAirport":"BSB","arrivalAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","arrivalDateTime":"2020-04-07T08:20:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"MIA","departureAirportDescription":"Miami, Miami","departureDateTime":"2020-04-06T22:15:00","fareBasis":null,"flightNumber":"7749","minutesDuration":545,"numberOfStops":0,"stops":[]},{"arrivalAirport":"CGH","arrivalAirportDescription":"Congonhas, S\xE3o Paulo","arrivalDateTime":"2020-04-07T14:25:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"BSB","departureAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","departureDateTime":"2020-04-07T12:40:00","fareBasis":null,"flightNumber":"1453","minutesDuration":105,"numberOfStops":0,"stops":[]}],"issuerCia":"G3","issuerCiaName":"Gol","markup":null,"numberOfStops":1,"origin":"MIA","originProvider":null,"packageGroup":null,"segmentIndex":1,"sellKey":"PHJhdGVUb2tlbiBhZ3M9IlNVQiIgYnJpPSIxMDIwIiBjbWk9IkdPTCIgY2lkPSIzMCIgY3VyPSJCUkwiIGR0Zj0iMjAyMC0wNC0wN1QxNDoyNTowMC4wMDBaIiBta3A9IjAuODkwMCIgb2ZkPSJ7ZzonR09MX3I6MTA6MjQnLGk6J2FkYTYzMjM3ZDQyMTRhZWUnfSIgcHhzPSIzMCwzMCIgcGtnPSJQQUNLQUdFIiBwbGM9IkJSTCIgZnRwPSJDIiBwb3Q9IjIyMjIuNjAiIHB3dD0iMzE5Mi4xNCIgcHJtPSJPUEVSMyIgcHJkPSJBSVIiIHJ0Yz0iT1BFUjMiIHNkdD0iMjAyMC0wMy0xMVQxNTo0Mzo0Ni42MzJaIiBzZ2s9InthOidHM343NzQ5fiB-fk1JQX4wNC8wNi8yMDIwIDIyOjE1fkJTQn4wNC8wNy8yMDIwIDA4OjIwfl5HM34xNDUzfiB-fkJTQn4wNC8wNy8yMDIwIDEyOjQwfkNHSH4wNC8wNy8yMDIwIDE0OjI1ficsYjonMH5Pfn5PTDRLWlRCUn5MMUJSfn4xMH5YJyxjOlt7YTonRzM3NzQ5LTA2MDQyMDIyMTUnLGI6J01JQUJTQjA3MDQyMDA4MjBPWScsZDonNzM4JyxlOidPTDRLWlRCUicsZjonTFQnLGg6J0czJ30se2E6J0czMTQ1My0wNzA0MjAxMjQwJyxiOidCU0JDR0gwNzA0MjAxNDI1T1knLGQ6JzczOCcsZTonT0w0S1pUQlInLGY6J0xUJyxoOidHMyd9XSxlOicwLjAsMC4wJ30iIHNvdD0iMjQ5Ny4zMCIgc3d0PSIzNDY2Ljg0IiBjb209IjAuMDAiIGNvcD0iMCIgaWN0PSIwLjAwIiBpY3A9IjAiIG1raT0iNTA1MjEiIHBsYT0iRzMiIHByZj0iMC4wMCIgbWVjPSJPV04iIGNwcD0iMCIgcnRrPSJMVCIgZW1pPSJmYWxzZSIvPg==","totalMinuteDuration":970},{"correlationId":null,"destination":"CGH","flights":[{"arrivalAirport":"BSB","arrivalAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","arrivalDateTime":"2020-04-07T08:20:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"MIA","departureAirportDescription":"Miami, Miami","departureDateTime":"2020-04-06T22:15:00","fareBasis":null,"flightNumber":"7749","minutesDuration":545,"numberOfStops":0,"stops":[]},{"arrivalAirport":"CGH","arrivalAirportDescription":"Congonhas, S\xE3o Paulo","arrivalDateTime":"2020-04-07T17:55:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"BSB","departureAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","departureDateTime":"2020-04-07T16:10:00","fareBasis":null,"flightNumber":"1455","minutesDuration":105,"numberOfStops":0,"stops":[]}],"issuerCia":"G3","issuerCiaName":"Gol","markup":null,"numberOfStops":1,"origin":"MIA","originProvider":null,"packageGroup":null,"segmentIndex":1,"sellKey":"PHJhdGVUb2tlbiBhZ3M9IlNVQiIgYnJpPSIxMDIwIiBjbWk9IkdPTCIgY2lkPSIzMCIgY3VyPSJCUkwiIGR0Zj0iMjAyMC0wNC0wN1QxNzo1NTowMC4wMDBaIiBta3A9IjAuODkwMCIgb2ZkPSJ7ZzonR09MX3I6MTA6MjQnLGk6J2FkYTYzMjM3ZDQyMTRhZWUnfSIgcHhzPSIzMCwzMCIgcGtnPSJQQUNLQUdFIiBwbGM9IkJSTCIgZnRwPSJDIiBwb3Q9IjIyMjIuNjAiIHB3dD0iMzE5Mi4xNCIgcHJtPSJPUEVSMyIgcHJkPSJBSVIiIHJ0Yz0iT1BFUjMiIHNkdD0iMjAyMC0wMy0xMVQxNTo0Mzo0Ni42MzJaIiBzZ2s9InthOidHM343NzQ5fiB-fk1JQX4wNC8wNi8yMDIwIDIyOjE1fkJTQn4wNC8wNy8yMDIwIDA4OjIwfl5HM34xNDU1fiB-fkJTQn4wNC8wNy8yMDIwIDE2OjEwfkNHSH4wNC8wNy8yMDIwIDE3OjU1ficsYjonMH5Pfn5PTDRLWlRCUn5MMUJSfn4xMH5YJyxjOlt7YTonRzM3NzQ5LTA2MDQyMDIyMTUnLGI6J01JQUJTQjA3MDQyMDA4MjBPWScsZDonNzM4JyxlOidPTDRLWlRCUicsZjonTFQnLGg6J0czJ30se2E6J0czMTQ1NS0wNzA0MjAxNjEwJyxiOidCU0JDR0gwNzA0MjAxNzU1T1knLGQ6JzczRycsZTonT0w0S1pUQlInLGY6J0xUJyxoOidHMyd9XSxlOicwLjAsMC4wJ30iIHNvdD0iMjQ5Ny4zMCIgc3d0PSIzNDY2Ljg0IiBjb209IjAuMDAiIGNvcD0iMCIgaWN0PSIwLjAwIiBpY3A9IjAiIG1raT0iNTA1MjEiIHBsYT0iRzMiIHByZj0iMC4wMCIgbWVjPSJPV04iIGNwcD0iMCIgcnRrPSJMVCIgZW1pPSJmYWxzZSIvPg==","totalMinuteDuration":1180},{"correlationId":null,"destination":"GRU","flights":[{"arrivalAirport":"BSB","arrivalAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","arrivalDateTime":"2020-04-07T08:20:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"MIA","departureAirportDescription":"Miami, Miami","departureDateTime":"2020-04-06T22:15:00","fareBasis":null,"flightNumber":"7749","minutesDuration":545,"numberOfStops":0,"stops":[]},{"arrivalAirport":"GRU","arrivalAirportDescription":"Guarulhos, S\xE3o Paulo","arrivalDateTime":"2020-04-07T13:50:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"BSB","departureAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","departureDateTime":"2020-04-07T12:00:00","fareBasis":null,"flightNumber":"4813","minutesDuration":110,"numberOfStops":0,"stops":[]}],"issuerCia":"G3","issuerCiaName":"Gol","markup":null,"numberOfStops":1,"origin":"MIA","originProvider":null,"packageGroup":null,"segmentIndex":1,"sellKey":"PHJhdGVUb2tlbiBhZ3M9IlNVQiIgYnJpPSIxMDIwIiBjbWk9IkdPTCIgY2lkPSIzMCIgY3VyPSJCUkwiIGR0Zj0iMjAyMC0wNC0wN1QxMzo1MDowMC4wMDBaIiBta3A9IjAuODkwMCIgb2ZkPSJ7ZzonR09MX3I6MTA6MjQnLGk6J2FkYTYzMjM3ZDQyMTRhZWUnfSIgcHhzPSIzMCwzMCIgcGtnPSJQQUNLQUdFIiBwbGM9IkJSTCIgZnRwPSJDIiBwb3Q9IjIyMjIuNjAiIHB3dD0iMzE5Mi4xNCIgcHJtPSJPUEVSMyIgcHJkPSJBSVIiIHJ0Yz0iT1BFUjMiIHNkdD0iMjAyMC0wMy0xMVQxNTo0Mzo0Ni42MzNaIiBzZ2s9InthOidHM343NzQ5fiB-fk1JQX4wNC8wNi8yMDIwIDIyOjE1fkJTQn4wNC8wNy8yMDIwIDA4OjIwfl5HM340ODEzfiB-fkJTQn4wNC8wNy8yMDIwIDEyOjAwfkdSVX4wNC8wNy8yMDIwIDEzOjUwficsYjonMH5Pfn5PTDRLWlRCUn5MMUJSfn4xMH5YJyxjOlt7YTonRzM3NzQ5LTA2MDQyMDIyMTUnLGI6J01JQUJTQjA3MDQyMDA4MjBPWScsZDonNzM4JyxlOidPTDRLWlRCUicsZjonTFQnLGg6J0czJ30se2E6J0czNDgxMy0wNzA0MjAxMjAwJyxiOidCU0JHUlUwNzA0MjAxMzUwT1knLGQ6JzczOCcsZTonT0w0S1pUQlInLGY6J0xUJyxoOidHMyd9XSxlOicwLjAsMC4wJ30iIHNvdD0iMjQ5Ny4zMCIgc3d0PSIzNDY2Ljg0IiBjb209IjAuMDAiIGNvcD0iMCIgaWN0PSIwLjAwIiBpY3A9IjAiIG1raT0iNTA1MjEiIHBsYT0iRzMiIHByZj0iMC4wMCIgbWVjPSJPV04iIGNwcD0iMCIgcnRrPSJMVCIgZW1pPSJmYWxzZSIvPg==","totalMinuteDuration":935},{"correlationId":null,"destination":"GRU","flights":[{"arrivalAirport":"BSB","arrivalAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","arrivalDateTime":"2020-04-07T08:20:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"MIA","departureAirportDescription":"Miami, Miami","departureDateTime":"2020-04-06T22:15:00","fareBasis":null,"flightNumber":"7749","minutesDuration":545,"numberOfStops":0,"stops":[]},{"arrivalAirport":"GRU","arrivalAirportDescription":"Guarulhos, S\xE3o Paulo","arrivalDateTime":"2020-04-07T21:10:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"BSB","departureAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","departureDateTime":"2020-04-07T19:15:00","fareBasis":null,"flightNumber":"4915","minutesDuration":115,"numberOfStops":0,"stops":[]}],"issuerCia":"G3","issuerCiaName":"Gol","markup":null,"numberOfStops":1,"origin":"MIA","originProvider":null,"packageGroup":null,"segmentIndex":1,"sellKey":"PHJhdGVUb2tlbiBhZ3M9IlNVQiIgYnJpPSIxMDIwIiBjbWk9IkdPTCIgY2lkPSIzMCIgY3VyPSJCUkwiIGR0Zj0iMjAyMC0wNC0wN1QyMToxMDowMC4wMDBaIiBta3A9IjAuODkwMCIgb2ZkPSJ7ZzonR09MX3I6MTA6MjQnLGk6J2FkYTYzMjM3ZDQyMTRhZWUnfSIgcHhzPSIzMCwzMCIgcGtnPSJQQUNLQUdFIiBwbGM9IkJSTCIgZnRwPSJDIiBwb3Q9IjIyMjIuNjAiIHB3dD0iMzE5Mi4xNCIgcHJtPSJPUEVSMyIgcHJkPSJBSVIiIHJ0Yz0iT1BFUjMiIHNkdD0iMjAyMC0wMy0xMVQxNTo0Mzo0Ni42MzNaIiBzZ2s9InthOidHM343NzQ5fiB-fk1JQX4wNC8wNi8yMDIwIDIyOjE1fkJTQn4wNC8wNy8yMDIwIDA4OjIwfl5HM340OTE1fiB-fkJTQn4wNC8wNy8yMDIwIDE5OjE1fkdSVX4wNC8wNy8yMDIwIDIxOjEwficsYjonMH5Pfn5PTDRLWlRCUn5MMUJSfn4xMH5YJyxjOlt7YTonRzM3NzQ5LTA2MDQyMDIyMTUnLGI6J01JQUJTQjA3MDQyMDA4MjBPWScsZDonNzM4JyxlOidPTDRLWlRCUicsZjonTFQnLGg6J0czJ30se2E6J0czNDkxNS0wNzA0MjAxOTE1JyxiOidCU0JHUlUwNzA0MjAyMTEwT1knLGQ6JzczOCcsZTonT0w0S1pUQlInLGY6J0xUJyxoOidHMyd9XSxlOicwLjAsMC4wJ30iIHNvdD0iMjQ5Ny4zMCIgc3d0PSIzNDY2Ljg0IiBjb209IjAuMDAiIGNvcD0iMCIgaWN0PSIwLjAwIiBpY3A9IjAiIG1raT0iNTA1MjEiIHBsYT0iRzMiIHByZj0iMC4wMCIgbWVjPSJPV04iIGNwcD0iMCIgcnRrPSJMVCIgZW1pPSJmYWxzZSIvPg==","totalMinuteDuration":1375},{"correlationId":null,"destination":"GRU","flights":[{"arrivalAirport":"BSB","arrivalAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","arrivalDateTime":"2020-04-07T08:20:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"MIA","departureAirportDescription":"Miami, Miami","departureDateTime":"2020-04-06T22:15:00","fareBasis":null,"flightNumber":"7749","minutesDuration":545,"numberOfStops":0,"stops":[]},{"arrivalAirport":"GRU","arrivalAirportDescription":"Guarulhos, S\xE3o Paulo","arrivalDateTime":"2020-04-07T22:15:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"BSB","departureAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","departureDateTime":"2020-04-07T20:30:00","fareBasis":null,"flightNumber":"1419","minutesDuration":105,"numberOfStops":0,"stops":[]}],"issuerCia":"G3","issuerCiaName":"Gol","markup":null,"numberOfStops":1,"origin":"MIA","originProvider":null,"packageGroup":null,"segmentIndex":1,"sellKey":"PHJhdGVUb2tlbiBhZ3M9IlNVQiIgYnJpPSIxMDIwIiBjbWk9IkdPTCIgY2lkPSIzMCIgY3VyPSJCUkwiIGR0Zj0iMjAyMC0wNC0wN1QyMjoxNTowMC4wMDBaIiBta3A9IjAuODkwMCIgb2ZkPSJ7ZzonR09MX3I6MTA6MjQnLGk6J2FkYTYzMjM3ZDQyMTRhZWUnfSIgcHhzPSIzMCwzMCIgcGtnPSJQQUNLQUdFIiBwbGM9IkJSTCIgZnRwPSJDIiBwb3Q9IjIyMjIuNjAiIHB3dD0iMzE5Mi4xNCIgcHJtPSJPUEVSMyIgcHJkPSJBSVIiIHJ0Yz0iT1BFUjMiIHNkdD0iMjAyMC0wMy0xMVQxNTo0Mzo0Ni42MzNaIiBzZ2s9InthOidHM343NzQ5fiB-fk1JQX4wNC8wNi8yMDIwIDIyOjE1fkJTQn4wNC8wNy8yMDIwIDA4OjIwfl5HM34xNDE5fiB-fkJTQn4wNC8wNy8yMDIwIDIwOjMwfkdSVX4wNC8wNy8yMDIwIDIyOjE1ficsYjonMH5Pfn5PTDRLWlRCUn5MMUJSfn4xMH5YJyxjOlt7YTonRzM3NzQ5LTA2MDQyMDIyMTUnLGI6J01JQUJTQjA3MDQyMDA4MjBPWScsZDonNzM4JyxlOidPTDRLWlRCUicsZjonTFQnLGg6J0czJ30se2E6J0czMTQxOS0wNzA0MjAyMDMwJyxiOidCU0JHUlUwNzA0MjAyMjE1T1knLGQ6JzczOCcsZTonT0w0S1pUQlInLGY6J0xUJyxoOidHMyd9XSxlOicwLjAsMC4wJ30iIHNvdD0iMjQ5Ny4zMCIgc3d0PSIzNDY2Ljg0IiBjb209IjAuMDAiIGNvcD0iMCIgaWN0PSIwLjAwIiBpY3A9IjAiIG1raT0iNTA1MjEiIHBsYT0iRzMiIHByZj0iMC4wMCIgbWVjPSJPV04iIGNwcD0iMCIgcnRrPSJMVCIgZW1pPSJmYWxzZSIvPg==","totalMinuteDuration":1440},{"correlationId":null,"destination":"VCP","flights":[{"arrivalAirport":"BSB","arrivalAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","arrivalDateTime":"2020-04-07T08:20:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"MIA","departureAirportDescription":"Miami, Miami","departureDateTime":"2020-04-06T22:15:00","fareBasis":null,"flightNumber":"7749","minutesDuration":545,"numberOfStops":0,"stops":[]},{"arrivalAirport":"VCP","arrivalAirportDescription":"Viracopos, Campinas","arrivalDateTime":"2020-04-07T22:40:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"BSB","departureAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","departureDateTime":"2020-04-07T21:05:00","fareBasis":null,"flightNumber":"1772","minutesDuration":95,"numberOfStops":0,"stops":[]}],"issuerCia":"G3","issuerCiaName":"Gol","markup":null,"numberOfStops":1,"origin":"MIA","originProvider":null,"packageGroup":null,"segmentIndex":1,"sellKey":"PHJhdGVUb2tlbiBhZ3M9IlNVQiIgYnJpPSIxMDIwIiBjbWk9IkdPTCIgY2lkPSIzMCIgY3VyPSJCUkwiIGR0Zj0iMjAyMC0wNC0wN1QyMjo0MDowMC4wMDBaIiBta3A9IjAuODkwMCIgb2ZkPSJ7ZzonR09MX3I6MTA6MjQnLGk6J2FkYTYzMjM3ZDQyMTRhZWUnfSIgcHhzPSIzMCwzMCIgcGtnPSJQQUNLQUdFIiBwbGM9IkJSTCIgZnRwPSJDIiBwb3Q9IjIyMjIuNjAiIHB3dD0iMzE5Mi4xNCIgcHJtPSJPUEVSMyIgcHJkPSJBSVIiIHJ0Yz0iT1BFUjMiIHNkdD0iMjAyMC0wMy0xMVQxNTo0Mzo0Ni42MzRaIiBzZ2s9InthOidHM343NzQ5fiB-fk1JQX4wNC8wNi8yMDIwIDIyOjE1fkJTQn4wNC8wNy8yMDIwIDA4OjIwfl5HM34xNzcyfiB-fkJTQn4wNC8wNy8yMDIwIDIxOjA1flZDUH4wNC8wNy8yMDIwIDIyOjQwficsYjonMH5Pfn5PTDRLWlRCUn5MMUJSfn4xMH5YJyxjOlt7YTonRzM3NzQ5LTA2MDQyMDIyMTUnLGI6J01JQUJTQjA3MDQyMDA4MjBPWScsZDonNzM4JyxlOidPTDRLWlRCUicsZjonTFQnLGg6J0czJ30se2E6J0czMTc3Mi0wNzA0MjAyMTA1JyxiOidCU0JWQ1AwNzA0MjAyMjQwT1knLGQ6JzczOCcsZTonT0w0S1pUQlInLGY6J0xUJyxoOidHMyd9XSxlOicwLjAsMC4wJ30iIHNvdD0iMjQ5Ny4zMCIgc3d0PSIzNDY2Ljg0IiBjb209IjAuMDAiIGNvcD0iMCIgaWN0PSIwLjAwIiBpY3A9IjAiIG1raT0iNTA1MjEiIHBsYT0iRzMiIHByZj0iMC4wMCIgbWVjPSJPV04iIGNwcD0iMCIgcnRrPSJMVCIgZW1pPSJmYWxzZSIvPg==","totalMinuteDuration":1465},{"correlationId":null,"destination":"VCP","flights":[{"arrivalAirport":"BSB","arrivalAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","arrivalDateTime":"2020-04-07T08:20:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"MIA","departureAirportDescription":"Miami, Miami","departureDateTime":"2020-04-06T22:15:00","fareBasis":null,"flightNumber":"7749","minutesDuration":545,"numberOfStops":0,"stops":[]},{"arrivalAirport":"GIG","arrivalAirportDescription":"Gale\xE3o, Rio de Janeiro","arrivalDateTime":"2020-04-07T20:50:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"BSB","departureAirportDescription":"Presidente Juscelino Kubitschek, Bras\xEDlia","departureDateTime":"2020-04-07T19:05:00","fareBasis":null,"flightNumber":"2043","minutesDuration":105,"numberOfStops":0,"stops":[]},{"arrivalAirport":"VCP","arrivalAirportDescription":"Viracopos, Campinas","arrivalDateTime":"2020-04-07T22:40:00","baggageInfo":{"checkedBaggageQuantity":0,"checkedBaggageWeight":23,"handBaggageQuantity":1,"handBaggageWeight":10},"cabin":"Economica","ciaCode":"G3","ciaName":"Gol","departureAirport":"GIG","departureAirportDescription":"Gale\xE3o, Rio de Janeiro","departureDateTime":"2020-04-07T21:25:00","fareBasis":null,"flightNumber":"2004","minutesDuration":75,"numberOfStops":0,"stops":[]}],"issuerCia":"G3","issuerCiaName":"Gol","markup":null,"numberOfStops":2,"origin":"MIA","originProvider":null,"packageGroup":null,"segmentIndex":1,"sellKey":"PHJhdGVUb2tlbiBhZ3M9IlNVQiIgYnJpPSIxMDIwIiBjbWk9IkdPTCIgY2lkPSIzMCIgY3VyPSJCUkwiIGR0Zj0iMjAyMC0wNC0wN1QyMjo0MDowMC4wMDBaIiBta3A9IjAuODkwMCIgb2ZkPSJ7ZzonR09MX3I6MTA6MjQnLGk6J2FkYTYzMjM3ZDQyMTRhZWUnfSIgcHhzPSIzMCwzMCIgcGtnPSJQQUNLQUdFIiBwbGM9IkJSTCIgZnRwPSJDIiBwb3Q9IjIyMjIuNjAiIHB3dD0iMzE5Mi4xNCIgcHJtPSJPUEVSMyIgcHJkPSJBSVIiIHJ0Yz0iT1BFUjMiIHNkdD0iMjAyMC0wMy0xMVQxNTo0Mzo0Ni42MzRaIiBzZ2s9InthOidHM343NzQ5fiB-fk1JQX4wNC8wNi8yMDIwIDIyOjE1fkJTQn4wNC8wNy8yMDIwIDA4OjIwfl5HM34yMDQzfiB-fkJTQn4wNC8wNy8yMDIwIDE5OjA1fkdJR34wNC8wNy8yMDIwIDIwOjUwfl5HM34yMDA0fiB-fkdJR34wNC8wNy8yMDIwIDIxOjI1flZDUH4wNC8wNy8yMDIwIDIyOjQwficsYjonMH5Pfn5PTDRLWlRCUn5MMUJSfn4xMH5YJyxjOlt7YTonRzM3NzQ5LTA2MDQyMDIyMTUnLGI6J01JQUJTQjA3MDQyMDA4MjBPWScsZDonNzM4JyxlOidPTDRLWlRCUicsZjonTFQnLGg6J0czJ30se2E6J0czMjA0My0wNzA0MjAxOTA1JyxiOidCU0JHSUcwNzA0MjAyMDUwT1knLGQ6JzczOCcsZTonT0w0S1pUQlInLGY6J0xUJyxoOidHMyd9LHthOidHMzIwMDQtMDcwNDIwMjEyNScsYjonR0lHVkNQMDcwNDIwMjI0ME9ZJyxkOic3MzgnLGU6J09MNEtaVEJSJyxmOidMVCcsaDonRzMnfV0sZTonMC4wLDAuMCwwLjAnfSIgc290PSIyNDk3LjMwIiBzd3Q9IjM0NjYuODQiIGNvbT0iMC4wMCIgY29wPSIwIiBpY3Q9IjAuMDAiIGljcD0iMCIgbWtpPSI1MDUyMSIgcGxhPSJHMyIgcHJmPSIwLjAwIiBtZWM9Ik9XTiIgY3BwPSIwIiBydGs9IkxUIiBlbWk9ImZhbHNlIi8-","totalMinuteDuration":1465}]}}};var outwardFlights=mock&&mock["package"]&&mock["package"].flight&&mock["package"].flight.segments&&!!mock["package"].flight.segments.length&&mock["package"].flight.segments.filter(function(item){return item.segmentIndex===0});var backFlights=mock&&mock["package"]&&mock["package"].flight&&mock["package"].flight.segments&&!!mock["package"].flight.segments.length&&mock["package"].flight.segments.filter(function(item){return item.segmentIndex===1});var ModalDetailFlightStory=function ModalDetailFlightStory(_ref){var brand=_ref.brand;return/*#__PURE__*/_react["default"].createElement(_BrandContext.BrandContextProvider,{brand:_brandMock["default"][brand],hostname:brand},/*#__PURE__*/_react["default"].createElement(_ThemeProviderCustom["default"],null,/*#__PURE__*/_react["default"].createElement(_core.Paper,null,/*#__PURE__*/_react["default"].createElement(_ModalDetailFlight["default"],{title:"teste",outwardFlight:outwardFlights[0],backFlight:backFlights[0],changeFlightOut:function changeFlightOut(){return null},changeFlightBack:function changeFlightBack(){return null},handleOpen:function handleOpen(){return null}}))))};var argsControls={args:{brand:"CVC"},argTypes:{brand:{type:"select",options:["BlackAndWhite","BlackFriday","CVC","CVCCorp","CVCYellow","Sub"]}}};(0,_react2.storiesOf)("Components/ModalDetailFlight",module).add("Default",function(args){return/*#__PURE__*/_react["default"].createElement(ModalDetailFlightStory,args)},argsControls);
//# sourceMappingURL=ModalDetailFlight.stories.js.map