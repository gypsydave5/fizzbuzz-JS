describe ("Fizzbuzz", function(){
	var fizzbuzz;

	beforeEach(function(){
		fizzbuzz = new Fizzbuzz;
	});

	describe("Fizzbuzz", function(){

		it ("knows that three is divisible by three", function(){
			expect(fizzbuzz.isDivisibleByThree(3)).toBe (true);
		});

		it ("knows that four is not divisible by three", function(){
			expect(fizzbuzz.isDivisibleByThree(4)).toBe (false);
		});

		it ("knows that five is divisible by five", function(){
			expect(fizzbuzz.isDivisibleByFive(5)).toBe (true);
		});

		it ("knows that six is not divisible by five", function(){
			expect(fizzbuzz.isDivisibleByFive(6)).toBe (false);
		});

		it ("knows that fifteen is divisible by fifteen", function(){
			expect(fizzbuzz.isDivisibleByFifteen(15)).toBe (true);
		});

		it ("knows that sixteen is not divisible by fifteen", function(){
			expect(fizzbuzz.isDivisibleByFifteen(16)).toBe (false);
		});

		it ("returns 4 when given 4", function(){
			expect(fizzbuzz.result(4)).toBe (4)
		});

		it ("returns 'Fizz' when given 3", function(){
			expect(fizzbuzz.result(3)).toBe ('Fizz')
		});

		it ("returns 'Buzz' when given 5", function(){
			expect(fizzbuzz.result(5)).toBe ('Buzz')
		});

		it ("returns 'Fizzbuzz' when given 15", function(){
			expect(fizzbuzz.result(15)).toBe ('Fizzbuzz')
		});

	});
});
