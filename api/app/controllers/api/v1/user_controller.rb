module Api        
    module V1
        class V1::UserController < ApplicationController
            def index
                @users = User.all

                @result = []

                @users.each { |user|

                    @state = State.where(user_id: user['id']).first
                    @medic = Medic.where(user_id: user['id']).first

                    @item = user.attributes

                    if @medic['expiration_date'] < Date.today 
                        @medic  = @medic.attributes
                        @medic.merge!(message: 'This medical recommendation is expired')
                    end
    
                    if @state['expiration_date'] < Date.today 
                        @state  = @state.attributes
                        @state.merge!(message: 'This state ID is expired')
                    end

                    @item.merge!(state: @state)
                    @item.merge!(medic: @medic)

                    @result.push(@item)
                }

                render json: {status: 'SUCCESS', data: @result}, status: :ok
            end

            def create
                @user = User.new(user_params)

                if @user.save
                    render json: {status: 'SUCCESS', data: @user}, status: :ok
                else
                    render json: {status: 'ERROR', data: @user.errors}, status: :unprocessable_entity
                end
            end

            def show
                @user = User.find(params[:id])
                @state = State.where(user_id: @user['id']).first
                @medic = Medic.where(user_id: @user['id']).first

                if @medic['expiration_date'] < Date.today 
                    @medic  = @medic.attributes
                    @medic.merge!(message: 'This medical recommendation is expired')
                end

                if @state['expiration_date'] < Date.today 
                    @state  = @state.attributes
                    @state.merge!(message: 'This state ID is expired')
                end

                @result = @user.attributes
                @result.merge!(state: @state)
                @result.merge!(medic: @medic)

                render json: {status: 'SUCCESS', data: @result}, status: :ok
            end

            def update
                @user = User.find(params[:id])
                if @user.update_attributes(user_params)
                    render json: {status: 'SUCCESS', data: @user}, status: :ok
                else
                    render json: {status: 'ERROR', data: @user.errors}, status: :unprocessable_entity
                end
            end

            def destroy
                @user = User.find(params[:id])
                if @user.destroy
                    render json: {status: 'SUCCESS', data: @user}, status: :ok
                else
                    render json: {status: 'ERROR', data: @user.errors}, status: :unprocessable_entity
                end
            end

            private

            def user_params
                params.require(:user).permit(:name, :email, :date_of_birth)
            end
        end
    end
end