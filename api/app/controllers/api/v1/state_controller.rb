module Api        
    module V1
        class Api::V1::StateController < ApplicationController
            def create
                @state = State.new(state_params)

                if @state.save
                    render json: {status: 'SUCCESS', data: @state}, status: :ok
                else
                    render json: {status: 'ERROR', data: @state.errors}, status: :unprocessable_entity
                end
            end

            def show
                @state = State.find(params[:id])

                @message = ''
                if @state['expiration_date'] < Date.today 
                    @message = 'This state ID is expired'
                end

                render json: {status: 'SUCCESS', message: @message, data: @state}, status: :ok
            end

            def update
                @state = State.find(params[:id])
                if @state.update_attributes(state_params)
                    render json: {status: 'SUCCESS', data: @state}, status: :ok
                else
                    render json: {status: 'ERROR', data: @state.errors}, status: :unprocessable_entity
                end
            end

            def destroy
                @state = State.find(params[:id])
                if @state.destroy
                    render json: {status: 'SUCCESS', data: @state}, status: :ok
                else
                    render json: {status: 'ERROR', data: @state.errors}, status: :unprocessable_entity
                end
            end

            private

            def state_params
                params.require(:state).permit(:state_num, :state_name, :expiration_date, :path_to_image, :user_id)
            end
        end
    end
end